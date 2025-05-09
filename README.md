# SoftSell - Software License Resale Platform

A responsive, single-page marketing website for SoftSell, a fictional software license resale startup. This website is built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Features Implemented

- [x] Responsive design for all device sizes (mobile, tablet, desktop)
- [x] Modern and visually appealing UI with cohesive color scheme
- [x] Light/Dark mode toggle with system preference detection
- [x] Smooth animations using Framer Motion
- [x] SEO meta tags for improved search engine visibility
- [x] Interactive chatbot widget with keyword-based responses for customer support
- [x] Form validation using React Hook Form and Zod
- [x] Modular code structure for easy maintenance and scalability
- [x] Animated page transitions and scroll effects
- [x] Accessible UI components following WCAG guidelines
- [x] Custom hooks for application-specific functionality

## Main Sections

1. **Hero Section**: Bold headline, subheading, CTA buttons, and key statistics
2. **How it Works**: Three-step process with icons and descriptions
3. **Why Choose Us**: Four key benefits with icons and descriptions
4. **Testimonials**: Customer reviews with avatars and company details
5. **Contact Form**: Lead capture form with validation
6. **Footer**: Navigation links, newsletter signup, and copyright information

## Interactive Components

1. **Chatbot Widget**: 
   - Floating chat button with animation
   - Expanding chat interface with message history
   - Keyword-based response system for common customer questions
   - Real-time message display with typing indicators
   - Persists across page navigation

2. **Theme Toggle**:
   - Animated toggle between light and dark modes
   - Respects system preferences by default
   - Persists user preference across sessions

3. **Navigation**:
   - Smooth scrolling to page sections
   - Mobile-responsive menu with animations
   - Active section highlighting

4. **Contact Form**:
   - Real-time validation with error messages
   - Animated submission feedback
   - Data validation using Zod schemas

## Design Choices

- **Typography**: Quicksand font family for a modern, clean look that enhances readability across devices
- **Color Scheme**: Uses shadcn/ui's neutral color palette with strategic accent colors for visual interest and hierarchy
- **UI Components**: Leverages shadcn/ui for consistent, accessible components with custom styling to match brand identity
- **Animations**: 
  - Subtle entrance animations for sections using Framer Motion
  - Interactive elements with hover and focus states for better user feedback
  - Smooth page transitions to enhance the premium feel of the application
- **Layout**: 
  - Responsive grid and flex layouts that adapt to different screen sizes
  - Strategic spacing and alignment principles for improved readability and visual hierarchy
  - Mobile-first approach ensuring excellent experience on all devices
- **Iconography**: Uses Lucide React icons for a cohesive visual language that communicates functionality clearly
- **Component Architecture**: 
  - Modular components organized by function and reusability
  - Clear separation between UI components and business logic
  - Custom hooks to encapsulate application-specific behaviors

## Technologies Used

- **Next.js 15**: React framework with file-based routing
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For utility-first styling
- **shadcn/ui**: For consistent, accessible UI components
- **Framer Motion**: For smooth animations
- **React Hook Form**: For form state management and validation
- **Zod**: For schema validation
- **Lucide React**: For icons
- **next-themes**: For theme management (dark/light mode)

## Development Process and Time Spent

### Planning Phase (1.5 hours)
- Sketching wireframes and component hierarchy
- Selecting technology stack and design system
- Setting up project architecture

### Core Development (7 hours)
- Setup of Next.js project with TypeScript and Tailwind CSS (0.5 hour)
- Implementation of shadcn/ui component system (1 hour)
- Development of main page sections:
  - Hero section (0.75 hour)
  - How it Works section (0.75 hour)
  - Why Choose Us section (0.75 hour)
  - Testimonials section (0.75 hour)
  - Contact section with form validation (1 hour)
  - Footer component (0.5 hour)
- Theme switching functionality (0.5 hour)
- Responsive design adjustments (0.75 hour)
- Animation implementation (0.5 hour)

### Interactive Features (2.5 hours)
- Chatbot widget development (1.5 hours)
  - UI design and animations
  - Message handling system
  - Keyword-based responses
- Custom hooks for application behavior (0.5 hour)
- Smooth scrolling implementation (0.25 hour)
- Cross-browser testing and fixes (0.25 hour)

### Refinement (3 hours)
- Performance optimization (1 hour)
- Accessibility improvements (0.5 hour)
- Code refactoring and documentation (1.5 hour)

**Total Time**: Approximately 12 hours

## How to Run

1. Clone the repository
   ```bash
   git clone https://github.com/Harshith-10/softsell.git
   cd softsell
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
```

This will generate an optimized build that can be deployed to any hosting service supporting Next.js applications.

## Future Enhancements
- [] Enhanced chatbot with AI-powered responses

## License

This project is licensed under the MIT License - see the LICENSE file for details.