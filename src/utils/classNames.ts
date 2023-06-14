export function classNames (classes: Record<string, boolean>, defaultClasses?: string[]) {
  const parsed =  Object
    .entries(classes)
    .filter(([key, value]) => value)
    .map(([key]) => key)
    
  return [
    ...(defaultClasses || []),
    ...parsed
  ].join(' ')
}

export function classGroupe (...args: any[]) {
  return args.join(' ')
}