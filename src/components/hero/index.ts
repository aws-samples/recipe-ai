import { BgPattern } from '@/components/ui/Bgpattern';
import { SignUpButton } from '@/components/marketing/LandingSignUp';

import { CharSplitter } from './CharSplitter';

export default function IndexPage() {
	return (
		<>
			{/* Bg Pattern */}
			<BgPattern />
			{/* Hero Copy */}
			<div className="mt-16 flex flex-col items-center gap-4">
				<h1 className="md:display h2 w-full px-4 text-center md:w-[802px] md:px-0">
					Flirt with the <span className="text-crimson-9 forbidden"> Forbidden</span>
				</h1>
				<CharSplitter />
			</div>
			{/* Hero CTA */}
			<div className="mb-40 mt-20 flex flex-col items-center gap-4">
				<p className="body">
					Unveil your <span className="font-semibold">bestowed Fantasy today!</span>
				</p>
				<div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
					<SignUpButton className="block" />
				</div>
				<p className="caption text-slate-11">Begin Free, No Strings Attached</p>
			</div>
		</>
	);
}
