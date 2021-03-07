# openbuilder-node

Easily-written kakao openbuilder library to develop [kakao channel](https://i.kakao.com/docs)

* written in `typescript`

The library includes a functions as below:

* Parser of openbuilder skill request (SkillRequest)
* Builder class of openbuilder skill response (SkillPayload)
  * supports components below:
    * card
      * [x] basicCard
      * [x] textCard
      * [x] listCard
      * [] commerceCard
      * [x] buttons in card
      * [x] thumbnail (wide / normal)
    * response Types
      * [x] multiple output
      * [x] normal / carousel output
    * quickReplys
      * [x] blockQuickReply
      * [x] messageQuickReply
      * [x] phoneQuickReply
      * [x] shareQuickReply
    * additionals
      * [] verification API
      * [] context
      * [] eventAPI
      
PR, comment, or implementation idea are welcome! You can add issue or mail me (gil4260@korea.ac.kr)
