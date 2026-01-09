export function interpolate (template: string, variables: Record<string, string>): string {
  return Object.entries(variables).reduce((acc, [key, value]) => {
    const regex = new RegExp(`{{\\s*${key}\\s*}}`, 'g')
    return acc.replace(regex, value)
  }, template)
}