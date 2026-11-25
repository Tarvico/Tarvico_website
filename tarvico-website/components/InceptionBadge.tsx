import Image from 'next/image'

// Official NVIDIA Inception Program badge (full-color, Screen SVG), served
// unmodified from /public. Display rules live in editorial.css under
// .inception-badge: provisional 180px minimum width and extra clear space.
// These are Tarvico's conservative defaults, not NVIDIA-confirmed specs.
export const INCEPTION_URL = 'https://www.nvidia.com/en-us/startups/'

const SRC = '/assets/brand/nvidia-inception/nvidia-inception-program-badge-rgb-for-screen.svg'

export default function InceptionBadge() {
  return (
    <span className="inception-badge">
      <Image src={SRC} width={500} height={216} alt="NVIDIA Inception member badge" />
    </span>
  )
}
