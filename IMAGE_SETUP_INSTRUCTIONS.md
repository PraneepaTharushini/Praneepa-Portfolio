# Profile Image Setup Instructions

## Current Setup (UPDATED - Using src/assets method)

The Hero component is now configured to import the profile image from `src/assets/profile.jpg`

## Steps to Add Your Profile Image:

1. **Copy your profile.jpg file** to: `src/assets/profile.jpg`
2. **Ensure the filename matches exactly**: `profile.jpg` (case sensitive)
3. **Recommended image specs**:
   - Format: JPG, PNG, or WebP
   - Size: 400x400px minimum (square ratio preferred)
   - File size: Under 1MB
   - High quality for professional appearance

## Import Method (Currently Used)

The image is imported as a module:

```tsx
import profileImage from "../assets/profile.jpg";
```

Then used in the component:

```tsx
<img src={profileImage} alt="Praneepa Tharushini - Portfolio Photo" />
```

## Benefits of This Approach:

- ✅ Vite automatically optimizes the image
- ✅ Proper bundling and cache busting
- ✅ TypeScript support
- ✅ Build-time error checking if image is missing
- ✅ Automatic fallback to initials if image fails to load

## After Adding the Image:

1. Save the file to `src/assets/profile.jpg`
2. Run `npm run dev` or `npm run build`
3. The website will automatically use your profile photo

## Fallback Behavior:

If the image is missing or fails to load, it will show "PT" initials with a gradient background.
