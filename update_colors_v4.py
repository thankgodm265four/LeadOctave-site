import os

# Configuration
# Current Colors (from previous update)
CURRENT_MAIN_TAN = "#D2B48C"
CURRENT_DARK_TAN = "#C19A6B"
CURRENT_LIGHT_TAN = "#E6D2B5"

# New Colors (Shifted Darker)
NEW_MAIN_TAN = "#C19A6B"  # Old Dark Tan becomes Main
NEW_DARK_TAN = "#A07855"  # New Darker Tan
NEW_LIGHT_TAN = "#D2B48C" # Old Main Tan becomes Light

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
                    
                    # Step 1: Replace Current Dark Tan with New Dark Tan
                    # We do this first so it doesn't conflict with Step 2
                    new_content = new_content.replace(CURRENT_DARK_TAN, NEW_DARK_TAN)
                    new_content = new_content.replace(CURRENT_DARK_TAN.lower(), NEW_DARK_TAN)
                    
                    # Step 2: Replace Current Main Tan with New Main Tan (which is the old dark tan code)
                    new_content = new_content.replace(CURRENT_MAIN_TAN, NEW_MAIN_TAN)
                    new_content = new_content.replace(CURRENT_MAIN_TAN.lower(), NEW_MAIN_TAN)
                    
                    # Step 3: Replace Current Light Tan with New Light Tan (which is the old main tan code)
                    new_content = new_content.replace(CURRENT_LIGHT_TAN, NEW_LIGHT_TAN)
                    new_content = new_content.replace(CURRENT_LIGHT_TAN.lower(), NEW_LIGHT_TAN)
                    
                    if content != new_content:
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        print(f"Updated: {filepath}")
                        count += 1
                except Exception as e:
                    print(f"Error processing {filepath}: {e}")
    print(f"Total files updated: {count}")

if __name__ == "__main__":
    print("Starting color darkening...")
    update_colors(TARGET_DIR)
    print("Color darkening complete.")
