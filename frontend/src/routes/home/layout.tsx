import type { ReactNode } from "react"
import { Outlet } from "react-router"

export function HomeLayout() {
    return (
    <main className="flex h-screen w-screen">
        <nav className="w-36 bg-black text-white shrink-0"></nav>
        <section className="flex w-full justify-center">
            <Outlet/>
        </section>
    </main>
    )
}