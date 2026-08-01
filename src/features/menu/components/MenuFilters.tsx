import { clsx } from 'clsx'
import { MENU_FILTER_OPTIONS, type MenuFilterOption } from '../hooks/useMenuFilter'

interface MenuFiltersProps {
  activeFilter: MenuFilterOption
  onChange: (filter: MenuFilterOption) => void
}

export function MenuFilters({ activeFilter, onChange }: MenuFiltersProps) {
  return (
    <div role="group" aria-label="Filter menu by category" className="flex flex-wrap justify-center gap-3">
      {MENU_FILTER_OPTIONS.map((option) => {
        const isActive = option === activeFilter

        return (
          <button
            key={option}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(option)}
            className={clsx(
              'rounded-full border px-5 py-2 font-sans text-sm font-medium transition-colors duration-300',
              isActive
                ? 'border-espresso bg-espresso text-ivory'
                : 'border-sand bg-transparent text-mocha hover:border-mocha',
            )}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}
