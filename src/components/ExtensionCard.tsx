import type { Extension } from '../data/extensions';

interface Props {
  extension: Extension;
}

export default function ExtensionCard({ extension }: Props) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
      {/* top accent bar */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex flex-col flex-1 p-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 shrink-0 rounded-xl border border-gray-100 bg-gray-50 flex items-center justify-center overflow-hidden">
            <img
              src={extension.iconUrl}
              alt={extension.name}
              className="w-full h-full object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = 'none';
                (e.currentTarget.nextElementSibling as HTMLElement)!.style.display = 'flex';
              }}
            />
            <span className="hidden items-center justify-center w-full h-full text-blue-600 font-bold text-lg">
              {extension.name.charAt(0)}
            </span>
          </div>

          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 leading-tight truncate">
              {extension.name}
            </h3>
            <p className="text-sm text-gray-500">by {extension.publisher}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {extension.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {extension.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Features */}
        <ul className="space-y-1.5 mb-6 flex-1">
          {extension.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
              <svg
                className="mt-0.5 w-4 h-4 shrink-0 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
          {extension.features.length > 4 && (
            <li className="text-xs text-gray-400 pl-6">
              +{extension.features.length - 4} more features
            </li>
          )}
        </ul>

        {/* CTA buttons */}
        <div className="flex gap-3 mt-auto">
          <a
            href={extension.marketplaceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.583 3.218L13.5 2l-4.583 1.218L5 6.5v11l4 2.5 4.5-1.5 4.5 1.5L22 17.5v-11l-4.417-3.282zM13.5 4.08l3.5 1.042v12.756l-3.5-1.167V4.08zm-1 0v12.631l-3.5 1.167V5.122L12.5 4.08zM6 7.3l4.5-1.5v12.6L6 19v-11.7zm12 11.4l-4.5-1.5V5.8l4.5 1.5V18.7z"/>
            </svg>
            VS Marketplace
          </a>
          <a
            href={extension.openVsxUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 8v8M8 12h8"/>
            </svg>
            Open VSX
          </a>
        </div>
      </div>
    </article>
  );
}
