import React from 'react'
import '../css/DarkAndLightTheme.css'

export default function DarkAndLight() {
    const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})
  return (
    <div>
        <div>
  <input type="checkbox" class="checkbox" id="checkbox"/>
  <label for="checkbox" class="checkbox-label">
    <i class="fas fa-moon"></i>
    <i class="fas fa-sun"></i>
    <span class="ball"></span>
  </label>
</div>
    </div>
  )
}
