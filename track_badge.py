from PIL import Image
import numpy as np

# Let's inspect subregions across frames
# Region 1: Step Number (left side, x: 50-180, y: 70-250)
# Region 2: Headline text (x: 50-380, y: 220-330)
# Region 3: Right UI card (x: 500-800, y: 120-400)
# Region 4: Badge counter pill (bottom right of card, x: 700-820, y: 340-410)
# Region 5: Stepper in top-right (x: 700-820, y: 20-60)

print("--- Step 1 Analysis (frames 100 to 225) ---")
for f in range(100, 225, 5):
    im = Image.open(f"all_frames/f_{f:04d}.jpg")
    # check badge color (green pixel count in badge area)
    arr = np.array(im)
    # green is roughly: high G, lower R and B (e.g. G > 120, R < 80, B < 120)
    badge_crop = arr[330:410, 680:820]
    green_mask = (badge_crop[:, :, 1] > 140) & (badge_crop[:, :, 0] < 80) & (badge_crop[:, :, 2] < 120)
    green_pixels = np.sum(green_mask)
    print(f"Frame {f:3d} (t={f/30:4.2f}s): green_pixels_in_badge={green_pixels:4d}")
