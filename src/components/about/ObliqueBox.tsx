interface ObliqueBoxProps {
	children: React.ReactNode;
}

const ObliqueBox = ({ children }: ObliqueBoxProps) => {
	return <div className='oblique'>{children}</div>;
};

export default ObliqueBox;
