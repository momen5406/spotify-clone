# NextJS Spotify Clone

A web application that mimics the core functionality of Spotify, built with NextJS and Supabase. This project allows users to authenticate, browse playlists, play music, add songs to favorites, and control playback, offering a familiar user experience similar to the popular music streaming service.

## 🚀 Live Demo

Experience the clone live: [https://spotify-clone-momen.vercel.app/](https://spotify-clone-momen.vercel.app/)

## ✨ Features

- **User Authentication:** Securely log in using email & password or your GitHub account, powered by Supabase Auth.
- **Playlist Management:** View your personalized playlists.
- **Favorite Songs:** Add and manage your favorite tracks.
- **Music Playback:** Play, pause, skip to next/previous tracks, and control volume.

## 🛠️ Technology Stack

This project is built using a modern and robust technology stack:

- **Frontend:**
  - [Next.js](https://nextjs.org/) - React framework for production.
  - [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
  - [Shadcn UI](https://ui.shadcn.com/) - Reusable components built with Radix UI and Tailwind CSS.
  - [Zustand](https://zustand.surge.sh/) - A small, fast, and scalable bearbones state-management solution.
  - [React Icons](https://react-icons.github.io/react-icons/) - SVG React icons of popular icon packs.
- **Backend & Database:**
  - [Supabase](https://supabase.io/) - An open-source Firebase alternative providing a PostgreSQL database, authentication, instant APIs, and real-time subscriptions.
- **Deployment:**
  - [Vercel](https://vercel.com/) - Cloud platform for frontend developers, enabling instant deployments.

## ⚙️ Setup and Installation

To get this project running on your local machine, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Environment Variables

You will need to set up your Supabase project and obtain your API keys.

1.  **Create a Supabase Project:**
    - Go to the [Supabase website](https://supabase.io/) and create a new project.
    - Enable **GitHub Auth** if you want to use GitHub for login.
2.  **Get Your Keys:**
    - Navigate to `Project Settings` -> `API` in your Supabase dashboard to find your `SUPABASE_URL` and `SUPABASE_ANON_KEY`.
3.  **Create a `.env.local` file:** In the root of your project, create a file named `.env.local` and add the following variables:

    ```
    NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL
    NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
    ```

### Installation Steps

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/momen5406/spotify-clone-nextjs.git](https://github.com/momen5406/spotify-clone-nextjs.git)
    cd spotify-clone-nextjs
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🎓 Credit and Acknowledgement

This project was developed by following a comprehensive YouTube tutorial:

- [Next.js 13 Spotify Clone Tutorial](https://www.youtube.com/watch?v=2aeMRB8LL4o)

## 🔗 Connect with Me

- **GitHub:** [https://github.com/momen5406](https://github.com/momen5406)
- **LinkedIn:** [https://www.linkedin.com/in/momen5406/](https://www.linkedin.com/in/momen5406/)
- **Portfolio:** [https://momenhussein.vercel.app/](https://momenhussein.vercel.app/)
