import React from "react"
import './hero.css'
import Bienvenida from "../../components/CuadroBienvenidaMain/Bienvenida"
import BannerSeparador from "../../components/BannerSeparador/BannerSeparador"

export default function Hero() {
  return (
    <div>
      <div className="heroContainer">
        <Bienvenida></Bienvenida>
      </div>
    <BannerSeparador></BannerSeparador>
    </div>
  )
}
