# LeadOctave Color Scheme

## Brand Colors

Based on the LeadOctave logo, the site uses an elegant color palette combining gold/amber tones with deep navy/slate colors.

### Primary Colors

| Color | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| **Amber** | `#D97706` | `amber-600` | Primary CTA buttons, accents, hover states |
| **Amber Dark** | `#B45309` | `amber-700` | Button hover, darker accents |
| **Amber Light** | `#F59E0B` | `amber-500` | Navigation accents, highlights |

### Secondary Colors

| Color | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| **Slate Dark** | `#0F172A` | `slate-900` | Dark sections, navigation, footer |
| **Slate Medium** | `#1E293B` | `slate-800` | Alternative dark backgrounds |
| **Slate Light** | `#334155` | `slate-700` | Text on light backgrounds |

### Neutral Colors

| Color | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| **White** | `#FFFFFF` | `white` | Primary background, text on dark |
| **Gray 50** | `#F9FAFB` | `gray-50` | Light section backgrounds |
| **Gray 100** | `#F3F4F6` | `gray-100` | Card backgrounds, borders |
| **Gray 400** | `#9CA3AF` | `gray-400` | Disabled text, secondary labels |
| **Gray 600** | `#4B5563` | `gray-600` | Body text on light backgrounds |

---

## Component Color Usage

### Navigation Bar
- **Background:** White (`white`)
- **Logo Circle:** Amber gradient (`from-amber-500 to-amber-700`)
- **Links:** Slate 700 (`slate-700`) → Hover: Amber 600
- **Border:** Amber 600 (`border-b-4 border-amber-600`)
- **Logo Text:** Amber 700 (`text-amber-700`)
- **Tagline:** Slate 600 (`text-slate-600`)

### Hero Section
- **Overlay:** Black with 50% opacity
- **Subheading:** Amber 400 (`text-amber-400`)
- **Headline:** White (`text-white`)
- **Description:** Gray 200 (`text-gray-200`)
- **CTA Button:** Amber 600 → Hover: Amber 700

### Partners Section
- **Left Box:** Slate 900 (`bg-slate-900`)
- **Eyebrow:** Amber 500 (`text-amber-500`)
- **Headline:** White (`text-white`)
- **Right Box:** Gray 50 (`bg-gray-50`)
- **Logo Hover:** Grayscale to full color

### About Section
- **Background:** White (`bg-white`)
- **Eyebrow:** Amber 600 (`text-amber-600`)
- **Headline:** Slate 900 (`text-slate-900`)
- **Body Text:** Slate 600 (`text-slate-600`)

### Footer
- **Background:** Slate 900 (`bg-slate-900`)
- **Top Border:** Amber 600 (`border-t-4 border-amber-600`)
- **Headings:** White (`text-white`)
- **Links:** Gray 400 → Hover: Amber 500
- **Logo Circle:** Amber 600

### CTA Section
- **Background:** Gradient slate (`from-slate-900 to-slate-800`)
- **Button:** Amber 600

---

## Tailwind CSS Color Utilities

The site uses Tailwind's built-in color utilities. Apply colors directly:

```jsx
// Background Colors
<div className="bg-slate-900">Dark section</div>
<div className="bg-amber-600">Primary accent</div>
<div className="bg-gray-50">Light section</div>

// Text Colors
<h1 className="text-white">Headline</h1>
<p className="text-amber-600">Accent text</p>
<p className="text-slate-700">Body text</p>

// Border Colors
<div className="border-b-4 border-amber-600">Accent border</div>
```

---

## Accessibility

- **Contrast Ratios:** All text meets WCAG AA standards
- **Color Blind Friendly:** Amber and navy have good contrast
- **Focus States:** All interactive elements have clear focus indicators

---

## Future Updates

To change colors globally:
1. Update CSS variables in `src/styles/theme.css`
2. Replace Tailwind color classes in component files
3. Rebuild the site with `npm run build`

Example: Change primary amber to gold
```css
/* In theme.css */
--color-amber-600: #FFD700; /* Gold instead of amber */
```

---

**Color Palette Last Updated:** December 14, 2025
