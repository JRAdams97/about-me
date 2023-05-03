import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';

export default function Home(): JSX.Element {
    return (
        <div>
            <main className="flex min-h-screen flex-col bg-hero">
                <Header />
                <section id="hero" className="m-auto">
                    <Hero />
                </section>
            </main>
            <section id="about" className="bg-blue-700">
                <About />
            </section>
            <section id="skills" className="bg-yellow-700">
                <Skills />
            </section>
            <section id="experience" className="bg-red-700">
                <Experience />
            </section>
            <section id="contact-form" className="bg-green-700">
                <Contact />
            </section>
            <footer className="bg-gray-800">
                <Footer />
            </footer>
        </div>
    );
}
