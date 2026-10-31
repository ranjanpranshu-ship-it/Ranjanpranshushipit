export type Page = 'Intro' | 'Skills' | 'Projects' | 'Social' | 'About'

export const PAGES = ['Intro', 'Skills', 'Projects', 'Social', 'About'] as const satisfies readonly Page[]
