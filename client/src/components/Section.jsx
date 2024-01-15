export default function ContentSection({ title, children }) {
    return (
        <section className="flex flex-col items-center p-6">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div>
                {children}
            </div>
        </section>
    )
}