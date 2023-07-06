import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import ContactView from "@/views/ContactView.vue"
import ProjectsView from "@/views/ProjectsView.vue"
import ResumeView from "@/views/ResumeView.vue"
import TestimonialsView from "@/views/TestimonialsView.vue"
import AboutView from "@/views/AboutView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectsView
  },
  {
    path: "/resume",
    name: "resume",
    component: ResumeView
  },
  {
    path: "/testimonials",
    name: "testimonials",
    component: TestimonialsView
  },
  {
    path: "/about",
    name: "about",
    component: AboutView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
