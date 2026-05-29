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
  {
    id: 'jakubkozera.azure-service-bus-explorer',
    name: 'Azure Service Bus Explorer',
    description:
      'Complete Azure Service Bus management tool for VS Code — explore namespaces, send and receive messages, manage queues and topics.',
    longDescription:
      'Azure Service Bus Explorer brings full-featured Service Bus management directly into VS Code. Connect to Azure Service Bus namespaces, browse queues and topics, send and receive messages, peek dead-letter queues, and monitor message flow without leaving your editor.',
    publisher: 'Jakub Kozera',
    iconUrl: 'https://jakubkozera.gallerycdn.vsassets.io/extensions/jakubkozera/azure-service-bus-explorer/0.1.1/1777888260596/Microsoft.VisualStudio.Services.Icons.Default',
    marketplaceUrl:
      'https://marketplace.visualstudio.com/items?itemName=JakubKozera.azure-service-bus-explorer',
    openVsxUrl: 'https://open-vsx.org/extension/jakubkozera/azure-service-bus-explorer',
    tags: ['Azure', 'Service Bus', 'Messaging', 'Cloud'],
    features: [
      'Connect to Azure Service Bus namespaces',
      'Browse queues, topics, and subscriptions',
      'Send and receive messages',
      'Peek and manage dead-letter queues',
      'Monitor message counts and properties',
      'Export and import messages',
    ],
  },
  {
    id: 'jakubkozera.azure-application-insights-explorer',
    name: 'Azure Application Insights Explorer',
    description:
      'Browse and analyze Azure Application Insights telemetry directly in VS Code — query logs, traces, exceptions, and dependencies.',
    longDescription:
      'Azure Application Insights Explorer integrates Application Insights monitoring into VS Code. Query telemetry data, analyze logs and traces, investigate exceptions, explore dependencies, and view performance metrics without switching context from your editor.',
    publisher: 'Jakub Kozera',
    iconUrl: 'https://jakubkozera.gallerycdn.vsassets.io/extensions/jakubkozera/azure-application-insights-explorer/0.1.0/1779620083010/Microsoft.VisualStudio.Services.Icons.Default',
    marketplaceUrl:
      'https://marketplace.visualstudio.com/items?itemName=JakubKozera.azure-application-insights-explorer',
    openVsxUrl: 'https://open-vsx.org/extension/jakubkozera/azure-application-insights-explorer',
    tags: ['Azure', 'Application Insights', 'Monitoring', 'Telemetry'],
    features: [
      'Connect to Azure Application Insights resources',
      'Query logs, traces, and custom events',
      'Analyze exceptions and failures',
      'Explore dependencies and request flow',
      'View performance metrics and KPIs',
      'Execute KQL queries with IntelliSense',
    ],
  },
];
