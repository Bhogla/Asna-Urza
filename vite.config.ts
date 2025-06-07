import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    const port = process.env.PORT || 4000 
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
});
