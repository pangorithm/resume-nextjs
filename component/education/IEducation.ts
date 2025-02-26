import { ICommon } from '../common/ICommon';

export declare namespace IEducation {
  /**
   * ### Sample Rendering
   *
   * ![image](https://user-images.githubusercontent.com/8033320/78058621-8c6d1f00-73c3-11ea-92ec-7f9f036dc985.png)
   *
   * @example https://github.com/uyu423/resume-nextjs/blob/master/payload/education.ts
   */
  export interface Payload extends ICommon.Payload {
    /** ### 교육 수료 리스트 */
    list: Item[];
  }

  export interface Item {
    /** ### 수료 교육 명 */
    title: string;

    /** ### 수료 교육 서브 타이틀 */
    subTitle: string;

    /**
     * ### 교육 수료 시작 시점
     *
     * @format YYYY-MM
     * @example '2010-03'
     */
    startedAt: string;

    /**
     * ### 교육 수료 종료 시점
     *
     * @format YYYY-MM
     * @example '2010-03'
     * @description 해당 값이 undefined 일 경우 아직 졸업하지 않은 것으로 판단.
     */
    endedAt?: string;

    /**
     * ### 하이퍼 링크
     *
     * @description 해당 필드가 not null 이면 title 전체가 `<a href>` 태그로 감싸진다.
     */
    link?: string;
  }
}
