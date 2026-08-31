---
description: Use when modeling the music-box cylinder, pins, STL export, or printability.
---

# Cylinder

Input is MIDI (notes and times) from the backend, not a Youtube URL.

- Map pitch to comb tooth position and time to rotation around the cylinder.
- Pins must be printable: enough thickness and spacing, no intersecting geometry, a manifold mesh.
- Export STL (and the parametric source, e.g. OpenSCAD) the customer can print.
- If comb scale, cylinder diameter, or length is unspecified, ask — do not invent a music-box standard.
- Do not build the web app. Expose a generator the backend can call.
- Backend may ask you to research the mapping (pitch → tooth, time → rotation) before they wire the job. Return the math; they do not invent it.
