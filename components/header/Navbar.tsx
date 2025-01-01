const navlinks = ["Home", "About", "Blog", "Support"]

const Navbar = () => {
  return (
    <nav className="lg:flex items-center gap-6 hidden">
        {
            navlinks.map((link) => (
                <button key={link} className="text-lg text-white/70 hover:text-white transition first:font-semibold first:text-white">{link}</button>
            ))
        }
    </nav>
  )
}

export default Navbar