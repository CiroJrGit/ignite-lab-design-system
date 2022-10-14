import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

export function Checkbox(props: CheckboxProps) {
	return (
		<CheckboxPrimitive.Root className="w-6 h-6 p-[2px] bg-gray-800 rounded" {...props}
		>
			<CheckboxPrimitive.Indicator asChild>
				<Check className="w-5 h-5 text-cyan-500" weight="bold" />
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	);
}