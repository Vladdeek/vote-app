import { GrayTag, GreenTag, RedTag, YellowTag } from '../../../components/Tags'
import { VotingMembers as VotingMembersData } from '../../../data/VotingMembers'

const VoteMemderCard = ({ FullName, Email, hisReg, hisVote }) => {
	return (
		<>
			<div className='w-full border-l-3 border-[#212121] p-2'>
				<div className='flex items-center gap-2'>
					<div className='flex flex-col text-base font-regular w-1/3'>
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
				<p className='text-xl font-bold mb-3'>Список голосующих</p>
				<div className='flex flex-col gap-3 h-full overflow-scroll pb-10'>
					{VotingMembersData.map((item, index) => {
						return (
							<VoteMemderCard
								key={index}
								FullName={item.FullName}
								Email={item.Email}
								hisReg={item.hisReg || false}
								hisVote={item.hisReg === false ? false : item.hisVote}
							/>
						)
					})}
				</div>
			</div>
		</>
	)
}
export default VotingMembers
