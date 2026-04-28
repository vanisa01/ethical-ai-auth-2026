#!/usr/bin/env python3
"""Generate QR codes for social links"""

import qrcode
import os

# Create assets directory if it doesn't exist
assets_dir = os.path.join(os.path.dirname(__file__), 'assets')
os.makedirs(assets_dir, exist_ok=True)

# Define the URLs and filenames
qr_data = [
    {
        'url': 'https://substack.com/@anastasiosvanis',
        'filename': 'qr-substack.png',
        'name': 'Substack'
    },
    {
        'url': 'https://www.linkedin.com/in/anastasiosmvanis/',
        'filename': 'qr-linkedin.png',
        'name': 'LinkedIn'
    },
    {
        'url': 'https://github.com/vanisa01/ethical-ai-auth-2026',
        'filename': 'qr-github.png',
        'name': 'GitHub'
    }
]

# Generate QR codes
for data in qr_data:
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(data['url'])
    qr.make(fit=True)
    
    img = qr.make_image(fill_color="black", back_color="white")
    filepath = os.path.join(assets_dir, data['filename'])
    img.save(filepath)
    print(f"✓ Generated QR code for {data['name']}: {filepath}")

print("\nAll QR codes generated successfully!")
