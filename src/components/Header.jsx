import logo from "../assets/logovox.png" 

function Header() {
    return (
      <header>
      <img src={logo} alt="Logo Vox 90 FM" class="logotipo"/>
      <nav class="menu">
          <a href="">Promoções</a>
          <a href="">Blogs</a>
          <a href="">Programação</a>
          <a href="">Anuncie</a>
      </nav>
      <aside class="relogio">
          <p>12:00</p>
      </aside>
  </header>
  )
}
export default Header;