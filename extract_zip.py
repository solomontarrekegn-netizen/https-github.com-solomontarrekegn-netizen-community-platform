#!/usr/bin/env python3
"""
ZIP Extraction and Analysis Script
Extracts and inspects the ask-community-telegram-bot.zip archive.
"""

import zipfile
import os
import json
from pathlib import Path

def analyze_zip(zip_path):
    """Extract and analyze ZIP file contents."""
    try:
        with zipfile.ZipFile(zip_path, 'r') as zip_ref:
            # List all files
            file_list = zip_ref.namelist()
            print(f"Total files in ZIP: {len(file_list)}")
            print("\nFile listing:")
            for name in sorted(file_list):
                print(f"  {name}")
            
            # Extract to temp directory for inspection
            extract_dir = "temp_extract"
            zip_ref.extractall(extract_dir)
            print(f"\nExtracted to: {extract_dir}")
            
            # Analyze structure
            print("\nDirectory structure:")
            for root, dirs, files in os.walk(extract_dir):
                level = root.replace(extract_dir, '').count(os.sep)
                indent = ' ' * 2 * level
                print(f'{indent}{os.path.basename(root)}/')
                sub_indent = ' ' * 2 * (level + 1)
                for file in files:
                    print(f'{sub_indent}{file}')
            
            return extract_dir
    except Exception as e:
        print(f"Error: {e}")
        return None

if __name__ == "__main__":
    zip_path = "ask-community-telegram-bot.zip"
    if os.path.exists(zip_path):
        analyze_zip(zip_path)
    else:
        print(f"ZIP file not found: {zip_path}")
