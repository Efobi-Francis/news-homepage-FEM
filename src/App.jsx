import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Trending from "./components/Trending"
import ArticleHighlight from "./components/ArticleHighlight"


function App() {

  return (
    <section className="bg-[hsl(36,100%,99%)]">
      <main className=" px-3 text-[15px] mb-20 font-inter-regular text-[hsl(240,100%,5%)] lg:max-w-6xl lg:mx-auto">

        <section className=" pt-4 lg:pt-20">
          <Navigation/>
          <div className=" lg:flex lg:mt-12 lg:gap-10 lg:mb-16">
            <Hero/>
            <Trending/>
          </div>
          <ArticleHighlight/>
        </section>

      </main>
    </section>
    
  )
}

export default App
