# Team Page Setup Guide

## Overview
A professional Team/Leadership page has been added to the AGAMWE website. The page is located at `/team` and showcases team members with their roles, bios, and contact information.

## File Location
- **Component**: `src/pages/Team.tsx`

## How to Customize

### 1. Update Team Members
Edit the `teamMembers` array in `src/pages/Team.tsx`:

```typescript
const teamMembers: TeamMember[] = [
  {
    name: "John Doe",
    title: "Founder & Managing Director",
    bio: "Your bio text here...",
    email: "john@agamwe.com",
    image: "/path/to/image.jpg", // Optional: add image path
  },
  // Add more team members...
];
```

### 2. Add Team Member Photos
1. Place team member photos in `src/assets/team/` folder
2. Update the `image` field in the team member object:
   ```typescript
   image: "/src/assets/team/john-doe.jpg"
   ```
3. The page will display the image instead of the placeholder initial

### 3. Update Core Values Section
Edit the values section in the Team page to match your company's values:

```typescript
<div>
  <h4 className="text-lg font-bold text-forest mb-2">Your Value Name</h4>
  <p className="text-sm text-slate-600">
    Your value description here.
  </p>
</div>
```

### 4. Add LinkedIn Profiles
Update the LinkedIn link in the contact section:

```typescript
<a
  href="https://linkedin.com/in/username"
  className="flex items-center justify-center h-9 w-9 rounded-lg bg-mist text-forest hover:bg-forest hover:text-white transition"
  title={`LinkedIn profile`}
>
  <Linkedin size={16} />
</a>
```

## Features

✅ **Responsive Design** - Works on mobile, tablet, and desktop
✅ **Active Page Indicator** - Shows which page user is on
✅ **Contact Links** - Email and LinkedIn integration
✅ **Professional Layout** - Clean, modern design matching brand
✅ **Core Values Section** - Highlight company values
✅ **Hover Effects** - Interactive elements with smooth transitions

## Navigation
The Team page is automatically added to:
- Header navigation menu
- Footer navigation links
- Mobile menu

## Styling
The page uses the same color scheme and styling as other pages:
- **Primary Color**: Forest green (#5d9d3b)
- **Accent Color**: Gold
- **Background**: Mist (light green)
- **Text**: Slate gray

## Next Steps
1. Replace placeholder names with actual team members
2. Add team member photos to `src/assets/team/`
3. Update LinkedIn profile URLs
4. Customize core values section
5. Test on different screen sizes

## Support
For questions or additional customization, refer to the main website structure in `src/pages/` directory.
