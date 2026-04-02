import { extensions } from '../data/extensions';
import ExtensionCard from './ExtensionCard';

export default function ExtensionsGrid() {
  return (
    <section>
      {/* Stats bar */}
      <div className="flex justify-center gap-10 mb-12 flex-wrap">
        <div className="text-center">
          <p className="text-3xl font-bold text-blue-600">{extensions.length}</p>
          <p className="text-sm text-gray-500 mt-1">extensions</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-green-600">100%</p>
          <p className="text-sm text-gray-500 mt-1">free</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-purple-600">2</p>
          <p className="text-sm text-gray-500 mt-1">registries</p>
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {extensions.map((ext) => (
          <ExtensionCard key={ext.id} extension={ext} />
        ))}
      </div>
    </section>
  );
}
