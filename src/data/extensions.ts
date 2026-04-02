export interface Extension {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  publisher: string;
  iconUrl: string;
  marketplaceUrl: string;
  openVsxUrl: string;
  tags: string[];
  features: string[];
}

export const extensions: Extension[] = [
  {
    id: 'jakubkozera.csharp-dev-tools',
    name: 'C# Dev Tools',
    description:
      'A comprehensive toolkit for C# and .NET developers — solution explorer, test generation, JWT tools, NuGet management and more.',
    longDescription:
      'C# Dev Tools supercharges your .NET workflow in VS Code with a full-featured solution explorer, intelligent test generation, a built-in JWT encoder/decoder, NuGet package management, Razor page scaffolding, and much more.',
    publisher: 'Jakub Kozera',
    iconUrl: 'https://JakubKozera.gallerycdn.vsassets.io/extensions/jakubkozera/csharp-dev-tools/0.29.2/1774460426961/Microsoft.VisualStudio.Services.Icons.Default',
    marketplaceUrl:
      'https://marketplace.visualstudio.com/items?itemName=JakubKozera.csharp-dev-tools',
    openVsxUrl: 'https://open-vsx.org/extension/JakubKozera/csharp-dev-tools',
    tags: ['C#', '.NET', 'Productivity', 'Testing'],
    features: [
      'Solution Explorer with full hierarchy',
      'Automatic test project detection',
      'Test generation from context menu',
      'JWT Encoder / Decoder',
      'NuGet package management',
      'Razor page scaffolding',
      'Add New Item with recent templates',
      'Matches your VS Code icon theme',
    ],
  },
  {
    id: 'jakubkozera.mssql-manager',
    name: 'MS SQL Manager',
    description:
      'Lightweight SQL Server manager for VS Code — browse databases, run queries, and inspect results without leaving your editor.',
    longDescription:
      'MS SQL Manager gives you a clean, integrated interface for working with SQL Server directly inside VS Code. Connect to local or remote instances, browse schemas, execute T-SQL queries, and view result sets in a rich data grid.',
    publisher: 'Jakub Kozera',
    iconUrl: 'https://JakubKozera.gallerycdn.vsassets.io/extensions/jakubkozera/ms-sql-manager/0.19.5/1775061297490/Microsoft.VisualStudio.Services.Icons.Default',
    marketplaceUrl:
      'https://marketplace.visualstudio.com/items?itemName=JakubKozera.ms-sql-manager',
    openVsxUrl: 'https://open-vsx.org/extension/JakubKozera/ms-sql-manager',
    tags: ['SQL', 'Database', 'SQL Server', 'T-SQL'],
    features: [
      'Connect to local & remote SQL Server instances',
      'Browse databases, tables, views and stored procedures',
      'Execute T-SQL queries with syntax highlighting',
      'Rich result grid with sorting & filtering',
      'Export results to CSV / JSON',
      'Query history',
    ],
  },
];
