window.globalProvideData('slide', '{"title":"3. Sebagai makhluk hidup membutuhkan ……. untuk rumah mereka","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"tween","slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":10,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"5htZpV9vu9S","lmsId":"Slide10","width":1280,"height":720,"resume":true,"background":{"type":"swf","imagedata":{"assetId":259,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"5lyx6K7a6Lx","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"5qZdxuBMld8.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_this.6Lai3oU0zga"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6gJ0OFcoXbq.InvalidPromptSlide"}}]}]},"ReviewInt_6dzH7tz8fWn":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5qZdxuBMld8"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6Lai3oU0zga.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6dzH7tz8fWn_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6dzH7tz8fWn_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6dzH7tz8fWn","typea":"var","valueb":"6857UqrcH0f","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6857UqrcH0f.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6dzH7tz8fWn"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6857UqrcH0f.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6dzH7tz8fWn"}]}]}]},"ReviewIntCorrectIncorrect_6dzH7tz8fWn":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6dzH7tz8fWn_ReviewShape"}}]},"AnsweredInt_6dzH7tz8fWn":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6dzH7tz8fWn"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_6dzH7tz8fWn":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5qZdxuBMld8"},"enabled":{"type":"boolean","value":false}}]},"6dzH7tz8fWn_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6Lai3oU0zga.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6857UqrcH0f.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6dzH7tz8fWn"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6Lai3oU0zga.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6Lai3oU0zga.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6dzH7tz8fWn"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_5lyx6K7a6Lx":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.5lBUDgvkRK1"}}]},"NavigationRestrictionPreviousSlide_5lyx6K7a6Lx":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000000001"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6gJ0OFcoXbq","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6gJ0OFcoXbq","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6dzH7tz8fWn","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6dzH7tz8fWn"}],"elseActions":[{"kind":"exe_actiongroup","id":"6dzH7tz8fWn_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6dzH7tz8fWn","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6dzH7tz8fWn","typea":"var","valueb":"6857UqrcH0f","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6857UqrcH0f"},"completed_slide_ref":{"type":"string","value":"_player.6cuV6pTCNvP.5bWzrg61RQL"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6dzH7tz8fWn","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6dzH7tz8fWn","typea":"var","valueb":"6857UqrcH0f","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6857UqrcH0f"},"completed_slide_ref":{"type":"string","value":"_player.6cuV6pTCNvP.5bWzrg61RQL"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5lyx6K7a6Lx"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5lyx6K7a6Lx"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"6dzH7tz8fWn_ReviewShape"}}]},{"kind":"ontimelinetick","time":250,"actions":[{"kind":"show","transition":"custom","animationId":"Entrance","reverse":false,"objRef":{"type":"string","value":"5tXcLtvTceE"}}]},{"kind":"ontimelinetick","time":500,"actions":[{"kind":"show","transition":"custom","animationId":"Entrance","reverse":false,"objRef":{"type":"string","value":"5qZdxuBMld8"}}]}]},"objects":[{"kind":"textinput","bindto":"_player.TextEntry2","align":"left","verticalAlign":"top","rtl":false,"numeric":false,"multiline":false,"maxchars":0,"placeholder":"ketik teks di sini","fontsize":29,"textcolor":"0xFFFFFF","bold":false,"italic":false,"font":"Open Sans Charset0_v9TY33EDE6F2","marginleft":17,"marginright":17,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":384,"yPos":430,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":234,"rotateYPos":26,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"5qZdxuBMld8","linkId":"","type":"vectortext","xPos":17,"yPos":8,"xAccOffset":0,"yAccOffset":0,"width":435,"height":53,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":193,"bottom":36,"pngfb":false,"pr":{"l":"Lib","i":401}}},"html5data":{"xPos":0,"yPos":0,"width":470,"height":54,"strokewidth":1}},"animations":[{"kind":"animation","id":"Entrance","duration":750,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":750,"mask":{"type":"randombars","settings":[{"kind":"setting","name":"direction","value":"horizontal"}],"duration":750,"easing":"linear","easingdir":"easeinout"}}]}],"width":469,"height":53,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":471,"bottom":55,"altText":"ketik teks di sini","pngfb":false,"pr":{"l":"Lib","i":400}}},"id":"5qZdxuBMld8","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.TextEntry2","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"exe_actiongroup","id":"_parent.ActGrpOnSubmitButtonClick"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5tXcLtvTceE_68561080","id":"01","linkId":"txt__default_5tXcLtvTceE","type":"acctext","xPos":17,"yPos":8,"xAccOffset":17,"yAccOffset":8,"width":919,"height":103,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"3. Sebagai makhluk hidup membutuhkan ……. untuk rumah mereka","style":{"fontSize":28.444,"fontIsBold":false,"fontFamily":"\\"Open SansBold CharsBoldE47A47C6\\",\\"Open Sans\\"","ascent":40.536,"descent":11.111,"leading":0,"underlinePosition":-2.852,"underlineThickness":1.889,"xHeight":20.703}}],"style":{"justification":"center","tagType":"P"},"runs":[{"idx":0,"len":59,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":85.333,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":64,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":32.889,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":919,"bottom":112,"pngfb":false,"pr":{"l":"Lib","i":410}}}],"shapemaskId":"","xPos":142,"yPos":260,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":476.5,"rotateYPos":59.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":953,"bottom":119,"altText":"3. Sebagai makhluk hidup membutuhkan ……. untuk rumah mereka","pngfb":false,"pr":{"l":"Lib","i":409}},"html5data":{"xPos":0,"yPos":0,"width":953,"height":119,"strokewidth":0}},"animations":[{"kind":"animation","id":"Entrance","duration":750,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":750,"mask":{"type":"randombars","settings":[{"kind":"setting","name":"direction","value":"horizontal"}],"duration":750,"easing":"linear","easingdir":"easeinout"}}]}],"width":953,"height":119,"resume":true,"useHandCursor":true,"id":"5tXcLtvTceE"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6dzH7tz8fWn_CorrectReview","id":"01","linkId":"6dzH7tz8fWn_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":674,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":318}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":317}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"6dzH7tz8fWn_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6dzH7tz8fWn_IncorrectReview","id":"01","linkId":"6dzH7tz8fWn_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":671,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":320}}}],"shapemaskId":"","xPos":0,"yPos":680,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":640,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1280,"bottom":40,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":319}},"html5data":{"xPos":1,"yPos":1,"width":1277,"height":37,"strokewidth":2}},"width":1280,"height":40,"resume":false,"useHandCursor":true,"id":"6dzH7tz8fWn_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"txt_6dzH7tz8fWn_ReviewShape","id":"01","linkId":"txt_6dzH7tz8fWn_ReviewShape","type":"vectortext","altText":"","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":654,"bottom":670,"pngfb":false,"pr":{"l":"Lib","i":412}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":2,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":576,"rotateYPos":282.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1260,"bottom":719,"altText":"","pngfb":false,"pr":{"l":"Lib","i":411}},"html5data":{"xPos":1,"yPos":1,"width":1258,"height":717,"strokewidth":1}},"width":1152,"height":565,"resume":false,"useHandCursor":true,"id":"6dzH7tz8fWn_ReviewShape"}],"startTime":-1,"elapsedTimeMode":"normal","animations":[{"kind":"animation","id":"5htZpV9vu9S","duration":1000,"hidetextatstart":true,"animateshapewithtext":false,"tweens":[{"kind":"tween","time":0,"duration":1000,"mask":{"type":"split","settings":[{"kind":"setting","name":"direction","value":"verticalout"}],"duration":1000,"easing":"linear","easingdir":"easeinout"}}]}],"useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');