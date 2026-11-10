from PIL import Image
import numpy as np

# In Step 2:
# Clock icon is around x: 670-750, y: 160-250
# Day bar is around x: 550-770, y: 280-340
print("--- Step 2 Analysis (frames 225 to 330) ---")
for f in range(225, 330, 5):
    im = Image.open(f"all_frames/f_{f:04d}.jpg")
    arr = np.array(im)
    # Check green pixels in day bar area (y: 280-340, x: 550-770)
    day_crop = arr[280:340, 550:770]
    green_mask = (day_crop[:, :, 1] > 140) & (day_crop[:, :, 0] < 80) & (day_crop[:, :, 2] < 120)
    # find x-coordinates of green pixels if any
    y_idx, x_idx = np.where(green_mask)
    if len(x_idx) > 0:
        mean_x = np.mean(x_idx) + 550
        print(f"Frame {f:3d} (t={f/30:4.2f}s): green_in_day={len(x_idx):4d}, mean_x={mean_x:.1f}")
    else:
        print(f"Frame {f:3d} (t={f/30:4.2f}s): green_in_day=   0")
