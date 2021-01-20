import { css } from "@emotion/core";
import HashLoader from "react-spinners/HashLoader";
import { colors } from "../../../styles/theme";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: ${colors.primaryLight};
`;


export default function Loader({loading}) {
    if(!loading) return null;
    return <div className="text-center animated fadeIn fast">
        <HashLoader color={colors.primary} loading={loading} css={override} size={150} />
    </div>
}