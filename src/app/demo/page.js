import OfficeEnvironment from '@/components/demo/OfficeEnvironment';

export default function DemoPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="p-4 md:p-8">
        <h1 className="text-3xl font-bold mb-2">SimWork Demo</h1>
        <p className="text-white/70 mb-4">Experience the immersive work simulation environment.</p>
      </div>

      <OfficeEnvironment />
    </main>
  );
}
