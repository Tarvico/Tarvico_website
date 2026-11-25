import Image from 'next/image'

// Official NVIDIA Inception Program badge (full-color, Screen SVG), served
// unmodified from /public. Display rules live in editorial.css under
// .inception-badge. See docs/brand/nvidia-inception-membership.md.
export const INCEPTION_URL = 'https://www.nvidia.com/en-us/startups/'

const SRC = '/assets/brand/nvidia-inception/nvidia-inception-program-badge-rgb-for-screen.svg'

// decorative: use when adjacent text already states the membership (e.g. inside
// the footer link), so screen readers do not announce it twice.
export default function InceptionBadge({ decorative = false }: { decorative?: boolean }) {
  return (
    <span className="inception-badge">
      <Image src={SRC} width={500} height={216} alt={decorative ? '' : 'NVIDIA Inception member badge'} />
    </span>
  )
}
