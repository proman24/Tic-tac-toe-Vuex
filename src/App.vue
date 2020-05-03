<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%); */
}

button{
  width: 400px;
  /* height: 100px; */
  font-size: 50px;
  border:none;
  border-radius: 10px;
  transition: background 500ms;
}
button:hover{
  background: rgba(20,40,255,0.3);
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
