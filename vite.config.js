import { defineConfig} from 'vite';

export default defineConfig({
server:{
    watch:{
        usePolling: true
    }
},
publicDir:"../public",
root:'./src',
build:{
    outDir:'../dist',  //define the output directory ,the output directory for to build files
    rollupOptions:{
        input:{
            main:'./src/index.html',
            profile:'./src/profile.html',
            reset:'./src/reset.html',
            signin:'./src/signin.html',
            signup:'./src/signup.html'
        }
    }
}
});