<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <nuxt-link class="navbar-brand" to="/">Dog Catalog</nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <nuxt-link class="nav-link" aria-current="page" to="/"
              >Home</nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/breeds">Breeds</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
