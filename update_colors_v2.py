import os

# Configuration
OLD_NAVY = "#142C4C"
NEW_NAVY = "#05101E" # Very Dark Navy

OLD_GOLD = "#D4A259"
NEW_BEIGE = "#D2B48C" # Warm Beige/Tan

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
                    
                    new_content = content.replace(OLD_NAVY, NEW_NAVY).replace(OLD_NAVY.lower(), NEW_NAVY)
                    new_content = new_content.replace(OLD_GOLD, NEW_BEIGE).replace(OLD_GOLD.lower(), NEW_BEIGE)
                    
                    if content != new_content:
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"Updated: {filepath}")
                        count += 1
                except Exception as e:
                    print(f"Error processing {filepath}: {e}")
    print(f"Total files updated: {count}")

if __name__ == "__main__":
    print("Starting color update...")
    update_colors(TARGET_DIR)
    print("Color update complete.")
