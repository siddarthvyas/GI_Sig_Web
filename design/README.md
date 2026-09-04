# Original design assets

Source files kept out of `public/` on purpose: anything in `public/` is
copied verbatim into the deployed build, so a 1.2 MB original sitting there
would ship to every visitor without ever being requested by a page.

## logo-original.png

The original 1024x1024 RGBA export of the GI SIG logo (1.24 MB).

`public/photos/logo.png` is this same image re-encoded to a 256-color
palette PNG at the same 1024x1024 dimensions, which is 71 KB (94% smaller)
and visually indistinguishable at the sizes the site renders it: mean
per-channel difference is about 1/255, and the logo appears at 295px in
the hero, 40px in the navbar, and 28px in the footer.

To regenerate the optimized version after editing the original:

    python3 -c "
    from PIL import Image
    src = Image.open('design/logo-original.png').convert('RGBA')
    src.quantize(colors=256, method=Image.Quantize.FASTOCTREE).save(
        'public/photos/logo.png', optimize=True)
    "
