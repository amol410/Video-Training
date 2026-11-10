from PIL import Image
import numpy as np

# Load frames and compute difference between consecutive frames
diffs = []
for i in range(1, 360):
    im1 = np.array(Image.open(f"all_frames/f_{i:04d}.jpg").convert('L'))
    im2 = np.array(Image.open(f"all_frames/f_{i+1:04d}.jpg").convert('L'))
    diff = np.mean(np.abs(im2.astype(float) - im1.astype(float)))
    diffs.append((i, i/30.0, diff))

# Sort by biggest diff
top_diffs = sorted(diffs, key=lambda x: x[2], reverse=True)[:30]
print("Top 30 frame changes (frame, sec, diff):")
for f, s, d in top_diffs:
    print(f"Frame {f:3d} ({s:5.2f}s): {d:.2f}")

# Also find local peaks in diffs (scene transitions / entry events)
peaks = []
for idx in range(1, len(diffs)-1):
    if diffs[idx][2] > diffs[idx-1][2] and diffs[idx][2] > diffs[idx+1][2] and diffs[idx][2] > 2.0:
        peaks.append(diffs[idx])

print("\nDetected motion peaks / events:")
for f, s, d in peaks:
    print(f"Frame {f:3d} ({s:5.2f}s): diff={d:.2f}")
