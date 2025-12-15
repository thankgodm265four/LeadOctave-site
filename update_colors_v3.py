import os

# Configuration
# Primary Replacements (Already done, but keeping for safety/completeness)
OLD_NAVY = "#142C4C"
NEW_NAVY = "#05101E" 

OLD_GOLD = "#D4A259"
NEW_BEIGE = "#D2B48C" 

# Secondary Replacements
OLD_NAVY_LIGHT = "#1a3a5c"
NEW_NAVY_LIGHT = "#0A1F3D"

OLD_GOLD_DARK = "#c9a430"
NEW_BEIGE_DARK = "#C19A6B"

OLD_GOLD_LIGHT = "#e8c547"
NEW_BEIGE_LIGHT = "#E6D2B5"

TARGET_DIR = "src"

def update_colors(directory):
    count = 0
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.jsx', '.js', '.css', '.astro', '.html')):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    new_content = content
                    # Apply replacements
                    replacements = [
                        (OLD_NAVY, NEW_NAVY),
                        (OLD_GOLD, NEW_BEIGE),
                        (OLD_NAVY_LIGHT, NEW_NAVY_LIGHT),
                        (OLD_GOLD_DARK, NEW_BEIGE_DARK),
                        (OLD_GOLD_LIGHT, NEW_BEIGE_LIGHT)
                    ]
                    
                    for old, new in replacements:
                        new_content = new_content.replace(old, new).replace(old.lower(), new).replace(old.upper(), new)
                    
                    if content != new_content:
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"Updated: {filepath}")
                        count += 1
                except Exception as e:
                    print(f"Error processing {filepath}: {e}")
    print(f"Total files updated: {count}")

if __name__ == "__main__":
    print("Starting secondary color update...")
    update_colors(TARGET_DIR)
    print("Secondary color update complete.")
