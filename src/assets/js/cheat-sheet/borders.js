export default {
	title: 'Borders',
	color: 'orange',
	span: 5,
	children: [
		{
			title: 'border-color'
		},
		{
			title: 'border-radius',
			table: {
				header: ['Class', 'Properties'],
				content: [
					['.rounded-none', 'border-radius: 0;'],
					['.rounded-sm', 'border-radius: .125rem;'],
					['.rounded', 'border-radius: .25rem;'],
					['.rounded-lg', 'border-radius: .5rem;'],
					['.rounded-full', 'border-radius: 9999px;'],
					[
						'.rounded-t-none',
						['border-top-left-radius: 0;', 'border-top-right-radius: 0;']
					],
					[
						'.rounded-r-none',
						['border-top-right-radius: 0;', 'border-bottom-right-radius: 0;']
					],
					[
						'.rounded-b-none',
						['border-bottom-right-radius: 0;', 'border-bottom-left-radius: 0;']
					],
					[
						'.rounded-l-none',
						['border-top-left-radius: 0;', 'border-bottom-left-radius: 0;']
					],
					[
						'.rounded-t-sm',
						[
							'border-top-left-radius: .125rem;',
							'border-top-right-radius: .125rem;'
						]
					],
					[
						'.rounded-r-sm',
						[
							'border-top-right-radius: .125rem;',
							'border-bottom-right-radius: .125rem;'
						]
					],
					[
						'.rounded-b-sm',
						[
							'border-bottom-right-radius: .125rem;',
							'border-bottom-left-radius: .125rem;'
						]
					],
					[
						'.rounded-l-sm',
						[
							'border-top-left-radius: .125rem;',
							'border-bottom-left-radius: .125rem;'
						]
					],
					[
						'.rounded-t',
						[
							'border-top-left-radius: .25rem;',
							'border-top-right-radius: .25rem;'
						]
					],
					[
						'.rounded-r',
						[
							'border-top-right-radius: .25rem;',
							'border-bottom-right-radius: .25rem;'
						]
					],
					[
						'.rounded-b',
						[
							'border-bottom-right-radius: .25rem;',
							'border-bottom-left-radius: .25rem;'
						]
					],
					[
						'.rounded-l',
						[
							'border-top-left-radius: .25rem;',
							'border-bottom-left-radius: .25rem;'
						]
					],
					[
						'.rounded-t-lg',
						[
							'border-top-left-radius: .5rem;',
							'border-top-right-radius: .5rem;'
						]
					],
					[
						'.rounded-r-lg',
						[
							'border-top-right-radius: .5rem;',
							'border-bottom-right-radius: .5rem;'
						]
					],
					[
						'.rounded-b-lg',
						[
							'border-bottom-right-radius: .5rem;',
							'border-bottom-left-radius: .5rem;'
						]
					],
					[
						'.rounded-l-lg',
						[
							'border-top-left-radius: .5rem;',
							'border-bottom-left-radius: .5rem;'
						]
					],
					[
						'.rounded-t-full',
						[
							'border-top-left-radius: 9999px;',
							'border-top-right-radius: 9999px;'
						]
					],
					[
						'.rounded-r-full',
						[
							'border-top-right-radius: 9999px;',
							'border-bottom-right-radius: 9999px;'
						]
					],
					[
						'.rounded-b-full',
						[
							'border-bottom-right-radius: 9999px;',
							'border-bottom-left-radius: 9999px;'
						]
					],
					[
						'.rounded-l-full',
						[
							'border-top-left-radius: 9999px;',
							'border-bottom-left-radius: 9999px;'
						]
					],
					['.rounded-tl-none', 'border-top-left-radius: 0;'],
					['.rounded-tr-none', 'border-top-right-radius: 0;'],
					['.rounded-br-none', 'border-bottom-right-radius: 0;'],
					['.rounded-bl-none', 'border-bottom-left-radius: 0;'],
					['.rounded-tl-sm', 'border-top-left-radius: .125rem;'],
					['.rounded-tr-sm', 'border-top-right-radius: .125rem;'],
					['.rounded-br-sm', 'border-bottom-right-radius: .125rem;'],
					['.rounded-bl-sm', 'border-bottom-left-radius: .125rem;'],
					['.rounded-tl', 'border-top-left-radius: .25rem;'],
					['.rounded-tr', 'border-top-right-radius: .25rem;'],
					['.rounded-br', 'border-bottom-right-radius: .25rem;'],
					['.rounded-bl', 'border-bottom-left-radius: .25rem;'],
					['.rounded-tl-lg', 'border-top-left-radius: .5rem;'],
					['.rounded-tr-lg', 'border-top-right-radius: .5rem;'],
					['.rounded-br-lg', 'border-bottom-right-radius: .5rem;'],
					['.rounded-bl-lg', 'border-bottom-left-radius: .5rem;'],
					['.rounded-tl-full', 'border-top-left-radius: 9999px;'],
					['.rounded-tr-full', 'border-top-right-radius: 9999px;'],
					['.rounded-br-full', 'border-bottom-right-radius: 9999px;'],
					['.rounded-bl-full', 'border-bottom-left-radius: 9999px;']
				]
			}
		},
		{
			title: 'border-style'
		},
		{
			title: 'border-width',
			description: [
				'.border{-side?}{-width?}',
				'eg. .border-b-4  is border-bottom: 4px'
			],
			table: {
				header: ['Class', 'Side(optional)', 'Width(optional)'],
				content: [
					['border', { ' ': 'All - default' }, { '0': '0px' }],
					['', { t: 'Top' }, { ' ': '1px(default)' }],
					['', { l: 'Left' }, { '2': '2px' }],
					['', { b: 'Bottom' }, { '4': '4px' }],
					['', '', { '8': '8px' }]
				]
			}
		}
	]
};
