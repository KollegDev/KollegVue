import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
    mounted() {
        AOS.init({ mirror: true, duration: 400, offset: 70, startEvent: 'DOMContentLoaded', })
    }
}