/** Short tap for RESERVATIONS CTA → /booking and booking form submit only. */

const BOOKING_UI_SOUND_SRC = '/sounds/button.mp3'

let pooled: HTMLAudioElement | undefined

export function playNavTapSound(): void {
  try {
    if (!pooled) {
      pooled = new Audio(BOOKING_UI_SOUND_SRC)
      pooled.preload = 'auto'
      pooled.volume = 0.7
    }
    pooled.pause()
    pooled.currentTime = 0
    void pooled.play().catch(() => {})
  } catch {
    /* ignore autoplay / missing file */
  }
}
