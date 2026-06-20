import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils.js';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] font-semibold transition-[background-color,border-color,box-shadow,transform] duration-150 ease-out active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-base)] disabled:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      // Filled variants get a dedicated inert treatment (muted fill + muted ink,
      // no shadow) rather than a translucent wash, which reads as a pale,
      // low-contrast "enabled" button. Outline variants keep simple opacity.
      variant: {
        primary: 'bg-primary text-primary-foreground shadow-[var(--shadow-sm)] hover:bg-[var(--color-accent-hover)] disabled:bg-[var(--color-bg-elevated)] disabled:text-[var(--color-text-muted)] disabled:shadow-none',
        secondary: 'border border-[var(--color-border-strong)] bg-[var(--color-bg-elevated)] text-foreground hover:border-[var(--color-text-muted)] hover:bg-[color-mix(in_srgb,var(--color-bg-elevated)_60%,var(--color-bg-card))] disabled:opacity-50',
        ghost: 'text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-elevated)] hover:text-foreground disabled:opacity-50',
        success: 'bg-[var(--color-success)] text-white shadow-[var(--shadow-sm)] hover:brightness-105 disabled:bg-[var(--color-bg-elevated)] disabled:text-[var(--color-text-muted)] disabled:shadow-none',
        danger: 'bg-[var(--color-error)] text-white shadow-[var(--shadow-sm)] hover:brightness-105 disabled:bg-[var(--color-bg-elevated)] disabled:text-[var(--color-text-muted)] disabled:shadow-none',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 text-sm',
        lg: 'h-11 px-6 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

export function Button({ className, variant, size, type = 'button', ...props }) {
  return (
    <button type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

export { buttonVariants };
