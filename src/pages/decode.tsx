import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React, { useEffect, useRef, useState } from 'react';
import styles from './decode.module.css';

type StatusType = 'success' | 'error' | 'info';

interface StatusState {
  type: StatusType;
  text: string;
}

// Seeded PRNG (mulberry32) — produces identical output every load
function makePrng(seed: number) {
  let s = seed;
  return function () {
    s |= 0;
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function drawCyberpunkScene(ctx: CanvasRenderingContext2D, W: number, H: number) {
  const rng = makePrng(0xdeadbeef);

  // Sky gradient
  const sky = ctx.createLinearGradient(0, 0, 0, H);
  sky.addColorStop(0, '#05050f');
  sky.addColorStop(0.3, '#0c0826');
  sky.addColorStop(0.6, '#1a0a3a');
  sky.addColorStop(1, '#0d1428');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, W, H);

  // Stars
  for (let i = 0; i < 200; i++) {
    const x = rng() * W;
    const y = rng() * H * 0.5;
    const r = rng() * 1.2;
    const a = rng() * 0.7 + 0.1;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${180 + rng() * 75}, ${200 + rng() * 55}, 255, ${a})`;
    ctx.fill();
  }

  // Distant neon haze
  const haze = ctx.createRadialGradient(W * 0.5, H * 0.55, 50, W * 0.5, H * 0.55, 400);
  haze.addColorStop(0, 'rgba(255, 0, 180, 0.12)');
  haze.addColorStop(0.5, 'rgba(0, 200, 255, 0.06)');
  haze.addColorStop(1, 'transparent');
  ctx.fillStyle = haze;
  ctx.fillRect(0, 0, W, H);

  const buildingColors = ['#0a0a18', '#0d0d22', '#08081a', '#0f0a25', '#070714'];
  const neonColors = ['#00f0ff', '#ff00e5', '#39ff14', '#ff3366', '#aa55ff', '#ffaa00'];

  // Background buildings
  for (let i = 0; i < 30; i++) {
    const bw = 20 + rng() * 50;
    const bh = 80 + rng() * 200;
    const bx = rng() * W;
    const by = H - bh;
    ctx.fillStyle = buildingColors[Math.floor(rng() * buildingColors.length)];
    ctx.fillRect(bx, by, bw, bh);

    for (let wy = by + 8; wy < H - 10; wy += 8 + rng() * 6) {
      for (let wx = bx + 4; wx < bx + bw - 4; wx += 6 + rng() * 4) {
        if (rng() > 0.35) {
          const wc =
            rng() > 0.85
              ? neonColors[Math.floor(rng() * neonColors.length)]
              : `rgba(${150 + rng() * 100}, ${160 + rng() * 80}, ${80 + rng() * 100}, ${rng() * 0.5 + 0.1})`;
          ctx.fillStyle = wc;
          ctx.fillRect(wx, wy, 2, 3);
        }
      }
    }
  }

  // Foreground buildings
  for (let i = 0; i < 12; i++) {
    const bw = 40 + rng() * 90;
    const bh = 120 + rng() * 280;
    const bx = (i / 12) * W - 20 + rng() * 40;
    const by = H - bh;
    const darkGrad = ctx.createLinearGradient(bx, by, bx, H);
    darkGrad.addColorStop(0, '#0a0a1a');
    darkGrad.addColorStop(1, '#050510');
    ctx.fillStyle = darkGrad;
    ctx.fillRect(bx, by, bw, bh);

    if (rng() > 0.5) {
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.3)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(bx + bw / 2, by);
      const antennaH = by - 15 - rng() * 30;
      ctx.lineTo(bx + bw / 2, antennaH);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(bx + bw / 2, antennaH, 2, 0, Math.PI * 2);
      ctx.fillStyle = rng() > 0.5 ? '#ff0044' : '#00f0ff';
      ctx.fill();
    }

    if (rng() > 0.5) {
      const nc = neonColors[Math.floor(rng() * neonColors.length)];
      const signY = by + 20 + rng() * (bh * 0.4);
      ctx.fillStyle = nc;
      ctx.globalAlpha = 0.7;
      ctx.fillRect(bx + 4, signY, bw - 8, 3);
      ctx.shadowColor = nc;
      ctx.shadowBlur = 15;
      ctx.fillRect(bx + 4, signY, bw - 8, 3);
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    }

    if (rng() > 0.6) {
      const nc = neonColors[Math.floor(rng() * neonColors.length)];
      const sx = bx + rng() * bw;
      ctx.strokeStyle = nc;
      ctx.globalAlpha = 0.4;
      ctx.lineWidth = 1.5;
      ctx.shadowColor = nc;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.moveTo(sx, by + 10);
      ctx.lineTo(sx, by + bh * 0.6);
      ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    }

    for (let wy = by + 10; wy < H - 5; wy += 7) {
      for (let wx = bx + 5; wx < bx + bw - 5; wx += 7) {
        if (rng() > 0.4) {
          const bright = rng();
          if (bright > 0.9) {
            ctx.fillStyle = neonColors[Math.floor(rng() * neonColors.length)];
            ctx.globalAlpha = 0.6;
          } else {
            ctx.fillStyle = `rgba(${100 + rng() * 120}, ${120 + rng() * 100}, ${60 + rng() * 80}, ${rng() * 0.4 + 0.05})`;
            ctx.globalAlpha = 1;
          }
          ctx.fillRect(wx, wy, 3, 4);
          ctx.globalAlpha = 1;
        }
      }
    }
  }

  // Ground
  const ground = ctx.createLinearGradient(0, H - 40, 0, H);
  ground.addColorStop(0, '#0a0a18');
  ground.addColorStop(1, '#0d0815');
  ctx.fillStyle = ground;
  ctx.fillRect(0, H - 40, W, 40);

  for (let i = 0; i < 150; i++) {
    const rx = rng() * W;
    const ry = H - 38 + rng() * 36;
    const rw = rng() * 12 + 2;
    ctx.fillStyle = `rgba(${rng() > 0.5 ? '0, 240, 255' : '255, 0, 229'}, ${rng() * 0.12})`;
    ctx.fillRect(rx, ry, rw, 1);
  }

  ctx.strokeStyle = 'rgba(0, 240, 255, 0.15)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, H - 38);
  ctx.lineTo(W, H - 38);
  ctx.stroke();

  // Flying vehicles
  for (let i = 0; i < 5; i++) {
    const vx = rng() * W;
    const vy = 50 + rng() * 150;
    const vl = 20 + rng() * 40;
    const vc = neonColors[Math.floor(rng() * neonColors.length)];
    const grad = ctx.createLinearGradient(vx, vy, vx + vl, vy);
    grad.addColorStop(0, 'transparent');
    grad.addColorStop(0.5, vc);
    grad.addColorStop(1, 'transparent');
    ctx.strokeStyle = grad;
    ctx.globalAlpha = 0.6;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(vx, vy);
    ctx.lineTo(vx + vl, vy - 2 + rng() * 4);
    ctx.stroke();
    ctx.globalAlpha = 1;
  }

  // Moon
  ctx.beginPath();
  ctx.arc(W * 0.78, 60, 25, 0, Math.PI * 2);
  const moonGrad = ctx.createRadialGradient(W * 0.78, 60, 5, W * 0.78, 60, 25);
  moonGrad.addColorStop(0, 'rgba(220, 200, 255, 0.9)');
  moonGrad.addColorStop(0.7, 'rgba(180, 160, 220, 0.4)');
  moonGrad.addColorStop(1, 'transparent');
  ctx.fillStyle = moonGrad;
  ctx.fill();
}

function textToBinary(text: string): string {
  const fullText = text + '\x00';
  let binary = '';
  for (let i = 0; i < fullText.length; i++) {
    binary += fullText.charCodeAt(i).toString(2).padStart(8, '0');
  }
  return binary;
}

function StegoTool() {
  const {siteConfig} = useDocusaurusContext();
  const secretMsg = (siteConfig.customFields?.SECRET_MESSAGE as string) || '';
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [status, setStatus] = useState<StatusState | null>(null);

  function getCtx(): [HTMLCanvasElement, CanvasRenderingContext2D] | null {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    return [canvas, ctx];
  }

  function downloadImage() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'cyberpunk_stego.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    setStatus({
      type: 'info',
      text: '⬇ Image downloaded as PNG. The hidden message survives as long as the file stays lossless (PNG).',
    });
  }

  useEffect(() => {
    const pair = getCtx();
    if (!pair) return;
    const [canvas, ctx] = pair;

    drawCyberpunkScene(ctx, canvas.width, canvas.height);

    // Encode the hard-coded message into the static image
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const binaryMsg = textToBinary(secretMsg);
    let bitIndex = 0;
    for (let i = 0; i < data.length && bitIndex < binaryMsg.length; i++) {
      if (i % 4 === 3) continue;
      data[i] = (data[i] & 0xfe) | parseInt(binaryMsg[bitIndex], 10);
      bitIndex++;
    }
    ctx.putImageData(imageData, 0, 0);
  }, []);

  const statusClass =
    status?.type === 'success'
      ? styles.statusSuccess
      : status?.type === 'error'
        ? styles.statusError
        : styles.statusInfo;

  return (
    <div className={styles.wrapper}>
      <div className={styles.scanline} />
      <div className={`${styles.cornerDec} ${styles.tl}`} />
      <div className={`${styles.cornerDec} ${styles.tr}`} />
      <div className={`${styles.cornerDec} ${styles.bl}`} />
      <div className={`${styles.cornerDec} ${styles.br}`} />
      <div className={styles.glitchBar} />

      <div className={styles.container}>
        <h1 className={styles.title}>FIND//THE//SIGNAL</h1>
        <div className={styles.subtitle}>Least-Significant-Bit</div>

        <div className={styles.panel}>
          <div className={styles.infoText}>
            A message has been encoded into the least significant bits of the pixel color channels below. Can you find what's hidden inside?
          </div>
          <div className={styles.btnRow}>
            <button className={`${styles.btn} ${styles.btnDownload}`} onClick={downloadImage}>
              ⟨ Download PNG ⟩
            </button>
          </div>
          {status && <div className={`${styles.status} ${statusClass}`}>{status.text}</div>}
        </div>

        <div className={styles.canvasWrap}>
          <canvas ref={canvasRef} className={styles.canvas} width={800} height={500} />
        </div>
      </div>
    </div>
  );
}

export default function DecodePage() {
  return (
    <Layout title="FIND//THE//SIGNAL" description="">
      <BrowserOnly>{() => <StegoTool />}</BrowserOnly>
    </Layout>
  );
}
