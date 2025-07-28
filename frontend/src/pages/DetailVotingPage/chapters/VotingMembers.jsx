import { GrayTag, GreenTag, RedTag, YellowTag } from '../../../components/Tags'

const VoteMemderCard = ({ FullName, Email, hisReg, hisVote }) => {
	return (
		<>
			<div className='w-full border-l-3 border-[#212121] p-2'>
				<div className='flex items-center gap-2'>
					<div className='flex flex-col w-1/3'>
						<p>{FullName}</p>
						<p>{Email}</p>
					</div>
					{hisReg ? (
						<YellowTag wfull={false}>
							<p>Зарегестрирован</p>
						</YellowTag>
					) : (
						<GrayTag>
							<p>Не зарегестрирован</p>
						</GrayTag>
					)}
					{hisVote ? (
						<GreenTag>
							<p>Проголасовал</p>
						</GreenTag>
					) : (
						<RedTag>
							<p>Не проголасовал</p>
						</RedTag>
					)}
				</div>
			</div>
		</>
	)
}

const VotingMembers = () => {
	return (
		<>
			<div className='bg-white shadow-sm rounded-[20px] h-[523px] overflow-hidden p-6'>
				<p className='text-2xl font-semibold mb-3'>Список голосующих</p>
				<div className='flex flex-col gap-3 h-full overflow-scroll pb-10'>
					<VoteMemderCard
						FullName={'Иванов Иван Иванович'}
						Email={'ivanovPH123@mail.ru'}
						hisReg={true}
					/>
					<VoteMemderCard
						FullName={'Максимов Иван Дристанович'}
						Email={'ivanovPH123@mail.ru'}
						hisReg={true}
						hisVote={true}
					/>
					<VoteMemderCard
						FullName={'Дристун Андрей Владимирович'}
						Email={'ivanovPH123@mail.ru'}
					/>
					<VoteMemderCard
						FullName={'Иванов Иван Иванович'}
						Email={'ivanovPH123@mail.ru'}
						hisReg={true}
					/>
					<VoteMemderCard
						FullName={'Максимов Иван Дристанович'}
						Email={'ivanovPH123@mail.ru'}
						hisReg={true}
						hisVote={true}
					/>
					<VoteMemderCard
						FullName={'Дристун Андрей Владимирович'}
						Email={'ivanovPH123@mail.ru'}
					/>
					<VoteMemderCard
						FullName={'Иванов Иван Иванович'}
						Email={'ivanovPH123@mail.ru'}
						hisReg={true}
					/>
					<VoteMemderCard
						FullName={'Максимов Иван Дристанович'}
						Email={'ivanovPH123@mail.ru'}
						hisReg={true}
						hisVote={true}
					/>
					<VoteMemderCard
						FullName={'Дристун Андрей Владимирович'}
						Email={'ivanovPH123@mail.ru'}
					/>
				</div>
			</div>
		</>
	)
}
export default VotingMembers
